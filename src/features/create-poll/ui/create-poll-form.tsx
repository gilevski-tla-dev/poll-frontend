import { useRef, useState } from "react";
import { Button, Input, Textarea } from "@/shared/ui";
import Cropper from "react-easy-crop";
import styles from "./create-poll-form.module.scss";
import { useCreatePollForm } from "../model/use-create-poll-form";
import { useNotification } from "@/features/notification";
import { useCreatePoll } from "@/entities/poll/hooks/use-create-poll";
import { useNavigate } from "react-router-dom";

export const CreatePollForm = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const { notify } = useNotification();
  const { mutate: createPoll, isPending } = useCreatePoll();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useCreatePollForm();

  const onSubmit = handleSubmit(
    (formData) => {
      createPoll(formData, {
        onSuccess: (response) => {
          navigate(`/question-list/${response.id}`);
        },
        onError: () => {
          notify("Произошла ошибка при создании опроса", "danger");
        },
      });
    },
    (errors) => {
      if (errors.title) {
        notify("Введите корректный заголовок\n(не менее 3 символов)", "danger");
      }
      if (errors.description) {
        notify("Введите корректное описание\n(не менее 5 символов)", "danger");
      }
    }
  );

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setValue("image", file);

    const reader = new FileReader();
    reader.onload = (event) => {
      if (event.target?.result) {
        setPreviewImage(event.target.result as string);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleRemoveImage = () => {
    setPreviewImage(null);
    setValue("image", null);
  };

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <Input
        className={styles.input}
        placeholder="Название"
        {...register("title")}
        error={errors.title?.message}
      />
      <Textarea
        className={styles.textarea}
        placeholder="Описание"
        {...register("description")}
        error={errors.description?.message}
      />

      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept="image/*"
        style={{ display: "none" }}
      />
      <Button
        className={styles.button}
        variant="secondary"
        onClick={handleButtonClick}
        type="button"
        disabled={isPending}
      >
        Загрузить фото
      </Button>

      {previewImage && (
        <>
          <Cropper
            image={previewImage}
            crop={crop}
            zoom={zoom}
            onCropChange={setCrop}
            onZoomChange={setZoom}
            cropShape="rect"
            showGrid={true}
            aspect={16 / 9}
            objectFit="cover"
            style={{
              containerStyle: {
                position: "relative",
                width: "100%",
                height: "200px",
                borderRadius: "14px",
                marginTop: "48px",
              },
            }}
          />
          <Button
            className={styles.button}
            variant="danger"
            type="button"
            onClick={handleRemoveImage}
            disabled={isPending}
          >
            Удалить
          </Button>
        </>
      )}

      <Button
        className={styles.create_button}
        variant="primary"
        type="submit"
        disabled={isPending}
      >
        {isPending ? "Создание..." : "Создать опрос"}
      </Button>
    </form>
  );
};

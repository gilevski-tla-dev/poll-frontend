import { useEffect, useRef, useState } from "react";
import { Button, Input, Textarea } from "@/shared/ui";
import Cropper from "react-easy-crop";
import styles from "./create-poll-form.module.scss";
import { useCreatePollForm } from "../model/use-create-poll-form";

export const CreatePollForm = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useCreatePollForm();

  useEffect(() => {
    console.log("Form errors:", errors.description?.message);
  }, [errors]);

  const onSubmit = (data: unknown) => {
    console.log("Submit form", data);
    // TODO: Отправка на API
  };

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
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
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
          >
            Удалить
          </Button>
        </>
      )}

      <Button className={styles.create_button} variant="primary" type="submit">
        Создать опрос
      </Button>
    </form>
  );
};

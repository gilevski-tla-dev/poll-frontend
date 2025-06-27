import { useRef, useState, type ChangeEvent } from "react";
import { Button, FullScreenLayout, Input, Textarea } from "@/shared/ui";
import styles from "./create-poll.module.scss";
import Cropper from "react-easy-crop";

const CreatePoll = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      console.log("Выбран файл:", file);

      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          setPreviewImage(event.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <FullScreenLayout>
      <h1 className={styles.title}>Создание опроса</h1>

      <Input className={styles.input} placeholder="Название" />
      <Textarea className={styles.textarea} placeholder="Описание" />

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

          <Button className={styles.button} variant="danger">
            Удалить
          </Button>
        </>
      )}
      <Button className={styles.create_button} variant="primary">
        Создать опрос
      </Button>
    </FullScreenLayout>
  );
};

export default CreatePoll;

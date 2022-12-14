import React from "react";
import { Form } from "react-bootstrap";
import axios from "axios";

type Props = {
    setImage: (data: string) => void;
};

const ImageUpload = (props: Props) => {
    const FileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        let formData:any = new FormData();
        formData.append("file", e.target.files?.[0]);
        axios.post("/api/post/image/upload", formData).then((res) => {
            props.setImage(res.data.filepath);
        });
    };

    return (
        <div>
            <Form.Control
                type="file"
                accept="image/*"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    FileUpload(e)
                }
            />
        </div>
    );
};

export default ImageUpload;

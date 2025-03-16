import { useRef, useState } from "react";
import UploadIcon from "../../../assets/UploadIcon";

type Props = {
  cancel: () => void;
};

const RequestMaintenance = ({ cancel }: Props) => {
  const uploadRef = useRef<HTMLInputElement>(null);
  const [selectFile, setSelectFile] = useState<string>("");

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      setSelectFile(file.name); // Store file name instead of FormData
    }
  };

  const handleClick = () => {
    uploadRef.current?.click(); // Trigger file input click
  };

  return (
    <div className="bg-white rounded-3xl w-[90vw] md:w-[50vw] lg:w-[28rem] xl:w-[30rem]">
      <div className="flex flex-col gap-5 lg:gap-6 p-2 md:p-5 lg:p-8">
        <h1 className="text-lg text-primary md:text-xl lg:text-2xl font-semibold text-center">
          Request Maintenance
        </h1>

        <div className="flex flex-col items-center gap-1">
          <p className="text-[#131B33] text-sm md:text-base lg:text-lg font-medium">
            Terminal ID - <span>1012345678</span>
          </p>
          <p className="text-xs md:text-sm text-secondary text-center">
            Device not working? Kindly tell us why with a picture attached.
          </p>
        </div>

        <div className="flex flex-col gap-1">
          <p className="flex items-start text-sm lg:text-base text-primary">
            Upload Picture <span className="text-red-500">*</span>
          </p>
          <div className="bg-button rounded-2xl w-full">
            <div className="flex flex-col gap-0.5 items-center py-3">
              <div
                onClick={handleClick}
                className="flex items-center gap-2 text-primary cursor-pointer"
              >
                <input
                  type="file"
                  name=""
                  id=""
                  ref={uploadRef}
                  onChange={handleUpload}
                  accept="image/*, application/pdf"
                  className="hidden"
                />
                <UploadIcon />
                <p className="text-xs md:text-sm lg:text-base font-medium">
                  Click to upload
                </p>
              </div>
              <span className="text-xs md:text-sm text-tertiary">
                {selectFile}
              </span>
              <p className="text-xs md:text-sm lg:text-base">
                PNG, JPG, JPEG or PDF
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <p className="flex items-start text-sm lg:text-base text-primary">
            Tell us why
            <span className="text-red-500">*</span>
          </p>
          <textarea
            name=""
            id=""
            cols={10}
            rows={5}
            placeholder="Message here"
            className="bg-[#FCFCFD] rounded-2xl p-3 text-xs md:text-sm lg:text-base border border-[#E3EFFC]"
          ></textarea>
        </div>

        <div className="flex items-center justify-end gap-2">
          <button
            onClick={cancel}
            className="text-primary bg-white rounded-3xl shadow px-3 lg:px-5 py-1.5 lg:py-2 cursor-pointer hover:bg-[#000]/10"
          >
            Cancel
          </button>
          <button className="bg-primary text-white rounded-3xl px-3 lg:px-5 py-1.5 lg:py-2 cursor-pointer">
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default RequestMaintenance;

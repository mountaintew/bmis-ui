import React, { useEffect, useMemo } from "react";
import { useDropzone } from "react-dropzone";
import CloudUploadRoundedIcon from "@mui/icons-material/CloudUploadRounded";
import { isEmpty } from "lodash";
const baseStyle = {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "20px",
  borderWidth: 2,
  borderRadius: 2,
  borderColor: "#eeeeee",
  borderStyle: "dashed",
  backgroundColor: "#fafafa",
  color: "#bdbdbd",
  outline: "1px dashed #222222",
  transition: "border .24s ease-in-out",
  paddingTop: "30px",
};

const focusedStyle = {
  border: "1px dashed #512DA8",
  borderColor: "#512DA8",
};

const acceptStyle = {
  borderColor: "#512DA8",
};

const rejectStyle = {
  borderColor: "#ff1744",
};

function DashboardDropzone(props) {
  const { setFiles } = props;

  const {
    getRootProps,
    getInputProps,
    isFocused,
    isDragAccept,
    isDragReject,
    acceptedFiles,
  } = useDropzone({
    accept: {
      "application/vnd.ms-excel": [".xls"],
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": [
        ".xlsx",
      ],
    },
  });

  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isFocused ? focusedStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isFocused, isDragAccept, isDragReject]
  );

  useEffect(() => {
    setFiles(acceptedFiles);
  }, [acceptedFiles, setFiles]);

  if (!isEmpty(acceptedFiles)) return false;
  return (
    <div className="container mt-3">
      <div {...getRootProps({ style })}>
        <input {...getInputProps()} />

        <CloudUploadRoundedIcon />
        <p>Drag 'n' drop some files here, or click to select files</p>
      </div>
    </div>
  );
}

export default DashboardDropzone;

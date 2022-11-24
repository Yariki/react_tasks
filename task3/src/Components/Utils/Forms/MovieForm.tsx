import React from "react";
import { Modal } from "../Components/Modal";
import { ModalAction } from "../Components/types";
import { InputField } from "../Components/InputField";
import { SelectField, SelectOption } from "../Components/SelectField";
import { TextAreaField } from "../Components/TextAreaField";
import { Movie } from "../../../Api";

export type Props = {
  onClose?: () => void;
  onSave?: () => void;
  isShown: boolean;
  isEdit: boolean;
  data?: Movie;
};

export const MovieForm: React.FunctionComponent<Props> = (props: Props) => {
  const saveAction: ModalAction = {
    label: "Save",
    action: props.onSave,
  };
  const cancelAction: ModalAction = {
    label: "Cancel",
    action: props.onClose,
  };

  const options: SelectOption<string>[] = [
    { value: "", label: "Select Genre" },
    { value: "Action", label: "Action" },
    { value: "Comedy", label: "Comedy" },
    { value: "Drama", label: "Drama" },
    { value: "Horror", label: "Horror" },
    { value: "Romance", label: "Romance" },
    { value: "Thriller", label: "Thriller" },
  ];

  return (
    <>
      <Modal
        id="addMovieModal"
        title={props.isEdit ? "Edit Movie" : "Add Movie"}
        isShown={props.isShown}
        saveAction={saveAction}
        cancelAction={cancelAction}
      >
        <div>
          <div className="columns">
            <div className="column">
              <InputField
                label="Title"
                id="title"
                type="text"
                placeholder="Title"
              />
            </div>
            <div className="column">
              <InputField
                label="Release Date"
                id="releaseDate"
                type="date"
                placeholder="Release Date"
              ></InputField>
            </div>
          </div>

          <div className="columns">
            <div className="column">
              <InputField
                label="Movie Url"
                id="url"
                type="text"
                placeholder="Movie Url"
              />
            </div>
            <div className="column">
              <InputField
                label="Rating"
                id="rating"
                type="number"
                placeholder="Rating"
              />
            </div>
          </div>

          <div className="columns">
            <div className="column">
              <SelectField id="genre" label="Genre" options={options} />
            </div>
            <div className="column">
              <InputField
                label="Runtime"
                id="runtime"
                type="number"
                placeholder="Runtime"
              />
            </div>
          </div>

          <div className="columns">
            <TextAreaField
              id="overview"
              label="Overview"
              placeholder="Overview"
            ></TextAreaField>
          </div>
        </div>
      </Modal>
    </>
  );
};

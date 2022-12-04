import React from "react";
import { Modal } from "../Components/Modal";
import { ModalAction } from "../Components/types";
import { InputField } from "../Components/InputField";
import { SelectField, SelectOption } from "../Components/SelectField";
import { TextAreaField } from "../Components/TextAreaField";
import { Movie, MovieBase } from "../../../Api";
import {
  Formik,
  Form,
  Field,
  FormikHelpers,
  FormikValues,
  FormikProps,
} from "formik";
import * as Yup from "yup";
import { MovieFormValues } from "../types";

export type Props = {
  onClose?: () => void;
  onSave?: (movie: MovieFormValues) => void;
  isShown: boolean;
  isEdit: boolean;
  data?: Movie | MovieFormValues;
};

const MovieBaseValidation = Yup.object().shape({
  title: Yup.string().required("Required"),
  posterPath: Yup.string().required("Required"),
  overview: Yup.string().required("Required"),
  runtime: Yup.number().integer().moreThan(0).required("Required"),
  genres: Yup.string().required("Required"),
});

const options: SelectOption<string>[] = [
  { value: "", label: "Select Genre" },
  { value: "Drama", label: "Drama" },
  { value: "Romance", label: "Romance" },
  { value: "Animation", label: "Animation" },
  { value: "Adventure", label: "Adventure" },
  { value: "Family", label: "Family" },
  { value: "Comedy", label: "Comedy" },
  { value: "Fantasy", label: "Fantasy" },
  { value: "Science Fiction", label: "Science Fiction" },
  { value: "Action", label: "Action" },
];

export const MovieForm: React.FunctionComponent<Props> = (props: Props) => {
  const formik = React.createRef<FormikProps<MovieFormValues>>();

  const saveAction: ModalAction = {
    label: "Save",
    action: () => formik?.current?.submitForm(),
  };
  const cancelAction: ModalAction = {
    label: "Cancel",
    action: props.onClose,
  };

  const { isEdit, data } = props;

  const initValues: MovieFormValues = {
    title: data?.title || "test",
    budget: data?.budget || 0,
    overview: data?.overview || "",
    releaseDate: data?.releaseDate || "",
    runtime: data?.runtime || 0,
    genres: data?.genres.at(1) || "",
    posterPath: data?.posterPath || "",
    revenue: data?.revenue || 0,
    tagline: data?.tagline || "",
    voteAverage: data?.voteAverage || 0,
    voteCount: data?.voteCount || 0,
  };

  console.log(initValues);

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
          <Formik
            innerRef={formik}
            initialValues={initValues}
            validationSchema={MovieBaseValidation}
            onSubmit={(values: MovieFormValues, actions) => {
              const { onSave } = props;
              if (onSave) {
                onSave(values);
              }
            }}
          >
            {({ errors, touched, values, setFieldValue }) => (
              <Form>
                <div className="columns">
                  <div className="column">
                    <label htmlFor="title">Title</label>
                    <Field
                      id="title"
                      name="title"
                      type="text"
                      placeholder="Title"
                    />
                    {errors.title && touched.title ? (
                      <span className="has-text-danger">{errors.title}</span>
                    ) : null}
                  </div>
                  <div className="column">
                    <label htmlFor="releaseDate">Release Date</label>
                    <Field
                      id="releaseDate"
                      name="releaseDate"
                      type="date"
                      placeholder="Release Date"
                    />
                  </div>
                </div>

                <div className="columns">
                  <div className="column">
                    <label htmlFor="posterPath">Poster</label>
                    <Field
                      id="posterPath"
                      name="posterPath"
                      type="text"
                      placeholder="Poster"
                    />
                    {errors.posterPath && touched.posterPath ? (
                      <span className="has-text-danger">
                        {errors.posterPath}
                      </span>
                    ) : null}
                  </div>
                  <div className="column">
                    <label htmlFor="voteCount">Vote Count</label>
                    <Field
                      id="voteCount"
                      name="voteCount"
                      type="number"
                      placeholder="Vote Count"
                    />
                  </div>
                </div>

                <div className="columns">
                  <div className="column">
                    <label htmlFor="genres">Genre</label>
                    <Field id="genres" name="genres" component="select">
                      {options.map((o) => (
                        <option key={o.value} value={o.value}>
                          {o.label}
                        </option>
                      ))}
                    </Field>
                    {errors.genres && touched.genres ? (
                      <span className="has-text-danger">{errors.genres}</span>
                    ) : null}
                  </div>
                  <div className="column">
                    <label htmlFor="runtime">Runtime</label>
                    <Field
                      id="runtime"
                      name="runtime"
                      type="number"
                      placeholder="Runtime"
                    />
                    {errors.runtime && touched.runtime ? (
                      <span className="has-text-danger">{errors.runtime}</span>
                    ) : null}
                  </div>
                </div>

                <div className="columns">
                  <Field
                    id="overview"
                    name="overview"
                    placeholder="Overview"
                    component="textarea"
                    cols={100}
                    rows={6}
                  ></Field>
                  {errors.overview && touched.overview ? (
                    <span className="has-text-danger">{errors.overview}</span>
                  ) : null}
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </Modal>
    </>
  );
};

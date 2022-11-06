import {InputFieldProps} from "./InputField";


export const TextAreaField = (props: InputFieldProps) => {

    return (
        <div className="field">
            <div className="control">
                <textarea className="textarea" placeholder={props.placeholder}
                          id={props.id} name={props.id}
                          onChange={props.onChange}

                    ></textarea>
            </div>
        </div>
    );

}
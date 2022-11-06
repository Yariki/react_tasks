import   React from 'react' ;

export type InputFieldProps = {
    id?: string;
    label?: string;
    placeholder?: string;
    onChange?: (arg: any) => void;
    type?: string;
    value?: string;
};


export const InputField = (props: InputFieldProps) => {

    return (
        <div className="field">
            <label className="label">{props.label}</label>
            <div className="control">
                <input id={props.id}
                       name={props.id}
                       placeholder={props.placeholder}
                       className="input" type={props.type} value={props.value}/>
            </div>
        </div>
    );
}
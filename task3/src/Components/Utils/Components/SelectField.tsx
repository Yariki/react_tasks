import React from "react";


export type SelectOption<TValue> = {
    value: TValue;
    label: string;
}

export type SelectProps = {
    id: string;
    label: string;
    options: SelectOption<any>[];
}


export const SelectField = (props: SelectProps) => {

    return (
        <div className="field">
            <label className="label">{props.label}</label>
            <div className="select">
                <select id={props.id} name={props.id}>
                    {
                        props.options.map((option) => {
                            return (
                                <option value={option.value}>{option.label}</option>
                            )
                        })
                    }
                </select>
            </div>
        </div>
    );
}


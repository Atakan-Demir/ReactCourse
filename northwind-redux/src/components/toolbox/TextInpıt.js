import React from "react";

const TextInput = ({ name, label, onChange, palaceHolder, value, error }) => {
    let wrapperClass = "form-group";
    if (error && error.length > 0) {
        wrapperClass += " has-error";//hata varsa input kırmızı olacak
    }
    return (
        <div className={wrapperClass}>
            <label htmlFor={name}></label>
            <div className="field">
                <input
                    type="text"
                    name={name}
                    className="form-control"
                    placeholder={palaceHolder}
                    value={value}
                    onChange={onChange} />

                {
                    //error varsa hata mesajı gösterilecek
                    error && <div className="alert alert-danger">{error}</div>
                }

            </div>
        </div>
    )
}



export default TextInput;
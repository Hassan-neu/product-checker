import React from "react";

const Input = () => {
    return (
        <div className="flex items-center py-3 px-2 justify-center gap-2 w-full bg-white fixed bottom-0 left-0">
            <textarea
                name=""
                id=""
                cols="30"
                rows="1"
                className="py-2 px-4 border-2 border-gray-500 rounded-full resize-none"
            ></textarea>
            <button className="py-2 px-2 rounded-full bg-blue-400">✈️</button>
        </div>
    );
};

export default Input;

// React
import React, { useEffect, useState } from "react";
import { usePage } from "@inertiajs/inertia-react";

// Styles
import "./styles.css";

function Message() {
    const { message } = usePage().props;
    const [showMessage, setShowMessage] = useState(false);

    useEffect(() => {
        message ? setShowMessage(true) : setShowMessage(false);
    }, [message]);

    if (!showMessage) {
        return null;
    }

    return (
        <div className="message alert alert-primary alert-dismissible fade show">
            {message}
            <button
                type="button"
                className="btn-close"
                onClick={() => setShowMessage(false)}
            ></button>
        </div>
    );
}

export default Message;

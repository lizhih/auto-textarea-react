import React, { useRef, useEffect } from 'react'
export const AutoTextAreaReact = ({className, defaultValue, placeholder, onChange}) => {
    const outerRef = useRef();
    const textRef = useRef();
    useEffect(() => {
        const autoHeight = () => {
            const target = textRef.current;
            target.style.height = 'auto';
            target.style.height = target.scrollHeight + 'px';
            outerRef.current.style.height = target.scrollHeight + 'px';
        }
        if (textRef.current) {
            autoHeight();
            textRef.current.addEventListener('input', autoHeight);
        }
        return () => {
            if (textRef.current) {
                textRef.current.removeEventListener('input', autoHeight)
            }
        }
    }, [])
    return <div className={className} ref={outerRef}><textarea ref={textRef} placeholder={placeholder} defaultValue={defaultValue} onChange={onChange}></textarea></div>
}
AutoTextAreaReact.defaultProps = {
    className: '',
    defaultValue: '',
    placeholder: 'enter...',
    onChange: () => {}
}

export default AutoTextAreaReact
export default function Button({ bgColor, txtColor, onClick, children }) {
    return (
        <button
            style={{ background: bgColor, color: txtColor }}
            onClick={onClick}
        >
            {children}
        </button>
    );
}

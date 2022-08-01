interface ClasssName {
    className: string;
}

const Spinner = (props: ClasssName): JSX.Element => {
    const { className } = props;
    return (
        <div className={`${className} sk-chase`}>
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
        </div>
    );
};

export default Spinner;

function Container({
    children,
    className = '',
    variant = 'transparent',
    props
}) {
    const variantStyle = (variant) => {
        switch (variant) {
            case 'transparent':
                return 'bg-transparent';
            case 'primary':
                return 'bg-gray';
            default:
                return '';
        }
    };

    return (
        <div
            className={`p-0
                position-relative
                overflow-hidden
                py-4
                ${variantStyle(variant)}
                ${className}`
            }
            {...props}
        >
            {children}
        </div>
    );
}


function SubContainer({
    children,
    className = '',
    props }) {
    return (
        <div
            className={`
           container-fluid
           px-4
           mx-auto
           position-relative
           max-w-1440
            `}
            {...props}
        >
            {children}
        </div>
    )
}







export { Container, SubContainer }
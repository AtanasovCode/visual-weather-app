import loadingIcon from '../assets/loading-icon.svg';

const LoadingAnim = () => {
    return (
        <>
            <img 
                src={loadingIcon}
                className="w-6 animate-spin"
            />
        </>
    );
}

export default LoadingAnim;
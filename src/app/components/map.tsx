export default function Map({ likes, handleClick }: { likes: number, handleClick: () => void }) {
    return (
        <>
            <h1>THIS IS MY MAP!</h1>
            <button onClick={handleClick}>Like ON MAP ({likes})</button>
        </>
    )
}
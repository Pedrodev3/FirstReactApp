type TweetProps = {
    text: string;
}

export function Tweet(props: TweetProps) {
    // Propriedades
    return (
        <p>{props.text}</p>
    )
}
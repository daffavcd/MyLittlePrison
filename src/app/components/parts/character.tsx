import Image from 'next/image';

export default function Character() {
    return (
        <Image
            src="/images/sprites/0_Warrior_Idle Blinking_000.png"
            fill={true}
            alt="Character"
            objectFit="contain"
            style={{ width: '100%', height: '100%' }}
        />
    )
}
import { Entity } from "../../Core/domain/entities";

interface ChallengeProps{
    title: string;
    urlInstructions: string
}

export class Challenge extends Entity<ChallengeProps>{
     private constructor(props: ChallengeProps, _id?: string){
        super(props, _id);
     }

    public create(props: ChallengeProps, id?: string){
        const challenge = new Challenge(props, id);

        return challenge;
    }
}
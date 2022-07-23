import { Entity } from "../../Core/domain/entities";

interface SubmissionProps{
    challengeId: string;
    studentId: String;
    createAt?: Date;

}

export class Submission extends Entity<SubmissionProps>{
     private constructor(props: SubmissionProps, _id?: string){
        super(props, _id);
     }

    static create(props: SubmissionProps, id?: string){
        const submission = new Submission({
            ...props,
            createAt: props.createAt ?? new Date(),
        }, id);

        return submission;
    }
}
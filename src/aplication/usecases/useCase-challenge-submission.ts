import { Submission } from "../../domain/entities/submission";
import { ChallengeRepository } from "../repositories/ChallengeRepository";
import { StudentsRepository } from "../repositories/StudentsRepository";


interface CreateChallengeSubRequest {
    studentId: string;
    challengeId: string;
}

export class CreateChallengeSub{
    constructor(
        private studentsRepository: StudentsRepository,
        private challengesRepository: ChallengeRepository
    ) {}

   async execute({studentId, challengeId} :CreateChallengeSubRequest){
    const student = await this.studentsRepository.findById(studentId);
    const challenge = await this.challengesRepository.findById(challengeId);

    if(!student){
        throw new Error ("student not found")
    }

    if(!challenge){
        throw new Error ("challenge not found")
    }

        const submission = Submission.create({
            studentId,
            challengeId
        })
        return submission;
    }

}
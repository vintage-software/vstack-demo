import {ObjectiveAssociation} from './objective-association';

export interface Objective {
  id: number;
  companyId: number;
  title: string;
  description: string;
  percentage: number;
  estimatedCompletionDate: Date;
  objectiveAssociations: ObjectiveAssociation[];
}

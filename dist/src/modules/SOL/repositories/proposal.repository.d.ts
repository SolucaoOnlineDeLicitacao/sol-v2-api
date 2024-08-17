import mongoose, { Model } from "mongoose";
import { ProposalModel } from "../models/proposal.model";
import { ProposalRegisterDto } from "../dtos/proposal-register-request.dto";
import { ProposalStatusUpdateDto } from "../dtos/proposal-status-update-request.dto";
import { ProposalAddItemUpdateDto } from "../dtos/proposal-addItem-update.dto";
import { ProposalSupplierAcceptUpdateDto } from "../dtos/proposal-accept-supplier-updatet.dto";
import { ProposalAssociationAcceptUpdateDto } from "../dtos/proposal-accept-association-updatet.dto";
import { ProposalWinRequestDto } from "../dtos/proposal-win-request.dto";
import { ProposalRefusedRequestDto } from "../dtos/proposal-refused-request.dto";
import { ProposalAcceptedRequestDto } from "../dtos/proposal-accepted-request.dto";
import { ProposalUpdateValues } from "../dtos/proposal-update-values-request.dto";
import { ProposalReviewerAcceptUpdateDto } from "../dtos/proposal-accept-reviewer-update.dto";
import { UserRepository } from "./user.repository";
export declare class ProposalRepository {
    private readonly _model;
    private readonly _userRepository;
    constructor(_model: Model<ProposalModel>, _userRepository: UserRepository);
    register(dto: ProposalRegisterDto): Promise<ProposalModel>;
    addItem(_id: string, dto: ProposalAddItemUpdateDto): Promise<ProposalModel>;
    removeItem(_id: string, dto: ProposalAddItemUpdateDto): Promise<ProposalModel>;
    updateStatus(_id: string, dto: ProposalStatusUpdateDto): Promise<ProposalModel>;
    updateAcceptSupplier(_id: string, dto: ProposalSupplierAcceptUpdateDto): Promise<ProposalModel>;
    updateAcceptAssociation(_id: string, dto: ProposalAssociationAcceptUpdateDto): Promise<ProposalModel>;
    updateAcceptReviewer(_id: string, dto: ProposalReviewerAcceptUpdateDto): Promise<ProposalModel>;
    updateProposedWin(_id: string, dto: ProposalWinRequestDto): Promise<ProposalModel>;
    updateListProposedWin(_ids: string[], dto: ProposalWinRequestDto): Promise<void>;
    refusedProposal(_id: string, dto: ProposalRefusedRequestDto): Promise<ProposalModel>;
    acceptForFornecedorProposal(_id: string, dto: ProposalAcceptedRequestDto): Promise<ProposalModel>;
    acceptForRevisorProposal(_id: string, dto: ProposalAcceptedRequestDto): Promise<ProposalModel>;
    listNonDeleted(): Promise<ProposalModel[]>;
    listByBid(bidId: string): Promise<ProposalModel[]>;
    listByUser(proposedById: string): Promise<ProposalModel[]>;
    listByBidsWaiting(bidId: string): Promise<ProposalModel[]>;
    getProposalWin(bidId: string): Promise<ProposalModel>;
    list(): Promise<ProposalModel[]>;
    getById(_id: string): Promise<ProposalModel>;
    deleteById(_id: string): Promise<ProposalModel & {
        _id: mongoose.Types.ObjectId;
    }>;
    updateValues(_id: string, dto: ProposalUpdateValues): Promise<ProposalModel>;
    listProposalByUserSupplier(_id: string): Promise<ProposalModel[]>;
    listProposalByBidTie(bidId: string): Promise<ProposalModel[]>;
    listBiBidsIds(bidsIds: string[]): Promise<ProposalModel[]>;
}
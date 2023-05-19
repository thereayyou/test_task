import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ParticipantDetailView } from "../components/ParticipantDetailsView";
import { RootState } from "../../../redux/Reducers";
import { getDefiniteId } from "../utils";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import {
  DELETE_PARTICIPANT,
  EDIT_PARTICIPANT,
} from "../../../redux/const/const";
import { TParticipant } from "../../../redux/types/participant";

export const ParticipantsDetailsController = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const definiteId = getDefiniteId();

  const storeParticipants = useTypedSelector(
    (state: RootState) => state.participantPage.participants
  );

  const definiteUser = storeParticipants.find(
    (el: TParticipant) => el.id === definiteId
  );

  const onSubmit = (data: any) => {
    dispatch({ type: EDIT_PARTICIPANT, payload: data });
    navigate("/participants/");
  };

  const onDeleteUser = () => {
    dispatch({ type: DELETE_PARTICIPANT, payload: { id: definiteUser?.id } });
    navigate("/participants/");
  };

  return (
    <ParticipantDetailView
      definiteUser={definiteUser}
      onDeleteUser={onDeleteUser}
      onSubmit={onSubmit}
    />
  );
};

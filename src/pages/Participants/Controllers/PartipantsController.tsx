import React, {useEffect, useState} from "react";
import {ParticipantsView} from "../Components/ParticipantsView";
import {getFirstIndex, getLastIndex, getNumberOfPages, getPages, participantHasSearchValue,} from "../utils";
import {TParticipantFields} from "../types";
import {useTypedSelector} from "../../../hooks/useTypedSelector";
import {TParticipant} from "../../../redux/types/participant";

const getSortMethodByFieldName = (fieldName: TParticipantFields) => {
  switch (fieldName) {
    case "distance":
      return (a: TParticipant, b: TParticipant) =>
        a[fieldName] < b[fieldName] ? 1 : -1;
    case "id":
    case "middleName":
    case "name":
    case "surname":
    case "city":
    case "hasPayment":
    default:
      return (a: TParticipant, b: TParticipant) =>
        a[fieldName] > b[fieldName] ? 1 : -1;
  }
};

export const ParticipantsController: React.FC = () => {

  const [sortFieldName, setSortFieldName] = useState<TParticipantFields>("id");

  const participants = [...useTypedSelector(
    (state) => state.participantPage.participants
  )].sort(getSortMethodByFieldName(sortFieldName)).map((el) => {
    return {
      id: el.id,
      middleName: el.middleName,
      name: el.name,
      surname: el.surname,
      city: el.city,
      distance: el.distance,
    };
  });

  const [searchQuery, setSearchQuery] = useState("");

  const filteredParticipants = searchQuery
    ? [...participants].filter((participant: any) =>
        participantHasSearchValue(participant, searchQuery)
      )
    : participants;

  const [currentPage, setCurrentPage] = useState(1);

  const lastIndex = getLastIndex(currentPage);

  const firstIndex = getFirstIndex(lastIndex);

  const records = filteredParticipants.slice(firstIndex, lastIndex);

  const numberOfPages = getNumberOfPages(filteredParticipants.length);

  const pages = getPages(numberOfPages);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery]);

  return (
    <ParticipantsView
      searchQuery={searchQuery}
      setSearchQuery={setSearchQuery}
      sortField={(field) => setSortFieldName(field)}
      records={records}
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
      numberOfPages={numberOfPages}
      pages={pages}
      updateData={() => alert('asd')}
    />
  );
};

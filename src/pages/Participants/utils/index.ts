import {RECORDS_PER_PAGE} from "../../../components/ui/Pagination/const/constants";
import {TParticipant} from "../../../redux/types/participant";

export const participantHasSearchValue = (
  participant: TParticipant,
  searchValue: string
) => {
  const participantProperties = Object.values(participant).map((item) =>
    String(item).toLowerCase()
  );

  return participantProperties.some((item) =>
    item.includes(searchValue.toLowerCase())
  );
};

export const getLastIndex = (currentPage: number) =>
  RECORDS_PER_PAGE * currentPage;

export const getFirstIndex = (lastIndex: number) =>
  lastIndex - RECORDS_PER_PAGE;

export const getNumberOfPages = (totalRecordsLength: number) =>
  Math.ceil(totalRecordsLength / RECORDS_PER_PAGE);

export const getPages = (numberOfPages: number) => {
  const numbers = Object.keys([...Array(numberOfPages + 2)].slice(1)).splice(1);

  return numbers.map((string) => parseFloat(string));
};

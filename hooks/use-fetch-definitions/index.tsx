/* eslint-disable no-console */
import { useQuery } from "react-query";

import { AnswerItem, ResultItem, SearchResult } from "../../types";
import {
  NO_ANSWER_ERROR,
  NO_ANSWER_PLACEHOLDER,
  NO_DEFINITION_FOUND_ERROR,
  UNKWOWN_ERROR_RESPONSE,
} from "../../constants";

const useFetchDefinitions = ({ answers }: { answers: Array<AnswerItem> }) => {
  const promiseMappedAnswers = answersToPromises({ answers });
  const { data, error, isError, isLoading, refetch, isRefetching, status } = useQuery<
    Array<ResultItem>
  >({
    queryKey: ["definitions"],
    queryFn: async () => {
      try {
        return await Promise.all(promiseMappedAnswers)
          .then((responses) => responses)
          .catch((reason) => {
            throw new Error(reason);
          });
      } catch (error) {
        console.error(error);

        return answers;
      }
    },
    retry: 3,
    refetchOnWindowFocus: false,
    placeholderData: answers,
  });

  return { data, error, isError, isLoading, refetch, isRefetching, status } as const;
};

export default useFetchDefinitions;

const answersToPromises = ({ answers }: { answers: Array<AnswerItem> }) => {
  const definitions: Promise<SearchResult>[] = answers.map((answer) => {
    const { word } = answer;

    return answer.word !== NO_ANSWER_PLACEHOLDER
      ? fetch(`api/definitions/${answer.word}`)
          .then(async (res) => {
            const responseData = await res.json();

            if (res.status === 500) {
              if ("message" in responseData) {
                return { ...UNKWOWN_ERROR_RESPONSE, message: responseData.message, word };
              } else {
                console.log(responseData);

                return responseData;
              }
            }

            if ("title" in responseData) {
              if (responseData.title === NO_DEFINITION_FOUND_ERROR.title) {
                return { ...NO_DEFINITION_FOUND_ERROR, word };
              } else {
                console.log(responseData);

                return responseData;
              }
            }

            return responseData;
          })
          .catch((reason) => {
            console.error(reason);

            return { ...UNKWOWN_ERROR_RESPONSE, word };
          })
      : new Promise((resolve) => resolve({ ...NO_ANSWER_ERROR, word }));
  });

  return definitions;
};

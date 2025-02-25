import {renderHook, waitFor} from '@testing-library/react';
import useThings from "./useThings";
import fetchMock from "jest-fetch-mock";
import MockApp from "../../library/MockApp";

fetchMock.enableMocks();

beforeEach(() => {
    // @ts-ignore
    fetch.resetMocks();
});

describe('useThings', () => {
        it('should return a list of things', async () => {

            // @ts-ignore
            fetch.mockResponseOnce(JSON.stringify([
                {
                    id: 1,
                    title: 'Thing Title'
                }
            ]));

            const {result} = renderHook(() => useThings(), {wrapper: MockApp})

            await waitFor(() => {
                console.log(result.current)
                expect(result.current.isLoading).toBe(false)
            })
            expect(result.current.data.length).toBe(1)
            expect(result.current.data[0].title).toBe("Thing Title")
            expect(result.current.data[0].id).toBe(1)

        })
    }
)
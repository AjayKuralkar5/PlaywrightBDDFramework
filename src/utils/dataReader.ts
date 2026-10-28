import testData from "../testData/testData.json";

export interface TextBoxData {

    fullName: string;

    email: string;

    currentAddress: string;

    permanentAddress: string;
}

export function getTextBoxData(
    testCaseId: string
): TextBoxData {

    const data =
        testData[
            testCaseId as keyof typeof testData
        ];

    if (!data) {

        throw new Error(
            `Test data not found for TestCaseId: ${testCaseId}`
        );
    }

    return data;
}
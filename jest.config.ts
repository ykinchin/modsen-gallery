export default {
	testEnvironment: 'jsdom',
	transform: {
		'^.+\\.tsx?$': 'ts-jest'
	},
	moduleNameMapper: {
		'^@components/(.*)$': '<rootDir>/src/components/$1',
		'^src/(.*)$': '<rootDir>/src/$1',
		'^@utils/(.*)$': '<rootDir>/src/utils/$1',
		'^@pages/(.*)$': '<rootDir>/src/pages/$1',
		'^@constants/(.*)$': '<rootDir>/src/constants/$1',
		'^@assets/(.*)$': '<rootDir>/src/assets/$1',
		'^@styles/(.*)$': '<rootDir>/src/styles/$1',
		'^@sharedTypes/(.*)$': '<rootDir>/src/sharedTypes/$1'
	},
	setupFilesAfterEnv: ['<rootDir>/jest.setup.ts']
}

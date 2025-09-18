/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from 'react';
import {
	StatusBar,
	StyleSheet,
	useColorScheme,
	SafeAreaView, //Deprecated, but  part of lab instruction
	View,
	Text,
} from 'react-native';
import {
	EdgeInsets,
	//SafeAreaProvider,
	//useSafeAreaInsets,
} from 'react-native-safe-area-context';

function App(): React.JSX.Element {
	const isDarkMode = useColorScheme() === 'dark';

	/**
	 * So a safe area is always visible, but safeAreaInsets is a hook that modifies how everything looks
	 * using it provides more control over the layout
	 * especically with some devices that have specific elements or components that may cause 
	 * changes to layout.
	 * see https://reactnavigation.org/docs/handling-safe-area/?config=dynamic
	 * -- TODO: fix 
	 * */
	//const safeAreaInsets = useSafeAreaInsets();

	return (<>
		{/*<SafeAreaProvider> */}
		{/* Provides a safe viewing area not obstructed by phone parts (like notches) */}
		<SafeAreaView style={styles.container}>
			<StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} /> {/*Zone at top of screen containing time, WI-FI, battery etc*/}
			<AppContent />
		</SafeAreaView>
		{/*</SafeAreaProvider>*/}
	</>);
}



function AppContent(): React.JSX.Element {
	return (
		<View style={styles.container}
		>
			<View style={styles.header}>
				<Text>Welcome to CPAN213!!!</Text>
				<Text>Cross-Platform Mobile Development</Text>
			</View>
			<View style={styles.content}>
				<Text style={styles.greeting}>Hello I'm Carson Fujita</Text>
				<Text style={styles.info}>Student ID: n01618379</Text>
				<Text style={styles.info}>Program: Computer Programming and Analysis</Text>

				<View style={styles.goals}>
					<Text style={styles.sectionTitle}>My Course Goals:</Text>
					<Text style={styles.goal}>• Learn React Native fundamentals</Text>
					<Text style={styles.goal}>• Build Cross-Platform movile apps</Text>
					<Text style={styles.goal}>• Master state management with Redux</Text>
					<Text style={styles.goal}>• Deploy apps to app stores</Text>
				</View>
			</View>
		</View >
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	header: {
		backgroundColor: '#3498db',
		padding: 20,
		alignItems: 'center',
	},
	title: {
		fontSize: 24,
		fontWeight: 'bold',
		color: 'white',
		marginBottom: 5,
	},
	subtitle: {
		fontSize: 16,
		color: 'white',
		fontStyle: "italic",
	},
	content: {
		flex: 1,
		padding: 20,
	},
	greeting: {
		fontSize: 22,
		fontWeight: 'bold',
		color: '#2c3e50',
		textAlign: 'center',
		marginBottom: 10,
	},
	info: {
		fontSize: 16,
		color: '#7f8c8d',
		textAlign: 'center',
		marginBottom: 5,
	},
	goals: {
		marginTop: 30,
		padding: 15,
		backgroundColor: "white",
		borderRadius: 10,
		elevation: 2,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.1,
		shadowRadius: 2,
	},
	sectionTitle: {
		fontSize: 18,
		fontWeight: 'bold',
		color: '#2c3e50',
		marginBottom: 10,
	},
	goal: {
		fontSize: 16,
		color: '#34495e',
		marginBottom: 5,
		lineHeight: 22,
	},
});

export default App;

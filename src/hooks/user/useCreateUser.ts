import supabase from 'lib/supabase';
import {type Database} from 'lib/supabase/types';

interface User {
	name: string;
	lastName: string;
	username: string;
	avatar_url: string | null | undefined;
}

type Credentials = {
	email: string;
	password: string;
};

type UserCreationResponse = Awaited<ReturnType<typeof createUser>>;
type UserCreationResponseSuccess = UserCreationResponse['data'];
type UserCreationResponseError = UserCreationResponse['error'];

const createUser = async (user: User) => {
	const {data, error} = await supabase
		.from('users')
		.select('*')
		.eq('email', user.username)
		.single();

	return await supabase.auth.signUp({
		email: user.username,
		password: user.username,
		options: {
			data: {
				first_name: user.name,
				last_name: user.lastName,
			},
		},
	});
};

export function useCreateUser() {}

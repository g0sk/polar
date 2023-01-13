import {createClient} from '@supabase/supabase-js';
import {type Database} from './types';
import {API_URL, PUBLIC_API_KEY} from '@env';

const supabase = createClient<Database>(API_URL, PUBLIC_API_KEY);

export default supabase;

import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.SUPABASE_URL || '';
const supabaseKey = process.env.SUPABASE_SECRET_KEY || '';
const supabase = createClient(supabaseUrl, supabaseKey)

export async function GET() {
    try {

        let { data: traffics, error } = await supabase
            .from('traffics')
            .select('*')

        if (error) {
            console.error('Error fetching data:', error);
            return new Response(JSON.stringify({
                error: error,
                status: 500
            }), {
                status: 500
            });
        }

        return Response.json({
            traffics,
            status: 200,
            description: 'Traffics fetched successfully'
        })
    } catch (error) {
        console.error('An error occurred:', error);
        return new Response(JSON.stringify({
            error: error,
            status: 500
        }), {
            status: 500
        });
    }
};

export async function POST(request: Request) {
    try {
        const date = new Date();
        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();

        const formData = await request.formData()
        const requestForm = {
            user_identity: formData.get('user_identity'),
            portfolios_opened: formData.get('portfolios_opened'),
            session_duration: formData.get('session_duration'),
            used_device: formData.get('used_device'),
            visited_pages: formData.get('visited_pages'),
            total_character_movements: formData.get('total_character_movements'),
            user_geolocation: formData.get('user_geolocation'),
            access_date: `${year}-${month}-${day}`
        };

        // CHECK IF IP HAS ALREADY EXIST AND THE DATE IS THE SAME THEN ABORT
        let { data: trafficsCheck, error: errorCheck } = await supabase
            .from('traffics')
            .select("*")
            .eq('user_identity', requestForm.user_identity)
            .eq('access_date', requestForm.access_date)

        if (errorCheck) {
            console.error('Error inserting data:', errorCheck);
            return Response.json({
                error: errorCheck,
                status: 500
            })
        }

        if (trafficsCheck != null && trafficsCheck.length > 0) {
            return Response.json({
                trafficsCheck,
                status: 200,
                description: 'Identity already exists for today'
            })
        }

        // START INSERTING IF THERE IS NO IDENTITY FOR TODAY
        const { data, error } = await supabase
            .from('traffics')
            .upsert(requestForm)
            .select();

        if (error) {
            console.error('Error inserting data:', error);
            return Response.json({
                error: error,
                status: 500
            })
        }

        return Response.json({
            data,
            status: 200,
            description: 'New Indentity inserted successfully'
        })
    } catch (error) {
        console.error('An error occurred:', error);
        return new Response(JSON.stringify({
            error: error,
            status: 500
        }), {
            status: 500
        });
    }
}

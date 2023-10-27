import { createClient } from '@supabase/supabase-js'
import { NextResponse } from 'next/server'

const supabaseUrl = process.env.SUPABASE_URL || '';
const supabaseKey = process.env.SUPABASE_SECRET_KEY || '';
const supabase = createClient(supabaseUrl, supabaseKey)

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
            access_date: `${year}-${month}-${day}`
        };

        let updateRequest = {};

        // PORTFOLIOS OPENED UPDATE
        if (requestForm.portfolios_opened !== null && requestForm.portfolios_opened !== undefined) {

            let { data: trafficsCheck, error: errorCheck } = await supabase
                .from('traffics')
                .select("*")
                .eq('user_identity', requestForm.user_identity)
                .eq('access_date', requestForm.access_date)
                .eq('used_device', requestForm.used_device)

            if (errorCheck) {
                console.error('Error getting current identity', errorCheck);
                return NextResponse.json({
                    error: errorCheck,
                    status: 500
                })
            }

            if (trafficsCheck != null && trafficsCheck.length > 0) {
                updateRequest = { ...updateRequest, portfolios_opened: parseInt(trafficsCheck[0].portfolios_opened) + 1 }
            }

        }

        // PORTFOLIOS SESSION DURATION UPDATE
        if (requestForm.session_duration !== null && requestForm.session_duration !== undefined) {
            updateRequest = { ...updateRequest, session_duration: requestForm.session_duration }
        }

        // PORTFOLIOS VISITED PAGE UPDATE
        if (requestForm.visited_pages !== null && requestForm.visited_pages !== undefined) {
            updateRequest = { ...updateRequest, visited_pages: requestForm.visited_pages }
        }

        // PORTFOLIOS CHARACTER MOVEMENTS UPDATE
        if (requestForm.total_character_movements !== null && requestForm.total_character_movements !== undefined) {
            let { data: trafficsCheck, error: errorCheck } = await supabase
                .from('traffics')
                .select("*")
                .eq('user_identity', requestForm.user_identity)
                .eq('access_date', requestForm.access_date)
                .eq('used_device', requestForm.used_device)

            if (errorCheck) {
                console.error('Error getting current identity', errorCheck);
                return NextResponse.json({
                    error: errorCheck,
                    status: 500
                })
            }

            if (trafficsCheck != null && trafficsCheck.length > 0) {
                updateRequest = { ...updateRequest, total_character_movements: parseInt(trafficsCheck[0].total_character_movements) + parseInt(requestForm.total_character_movements.toString()) }
            }
        }

        const { data, error } = await supabase
            .from('traffics')
            .update(updateRequest)
            .eq('user_identity', requestForm.user_identity)
            .eq('access_date', requestForm.access_date)
            .eq('used_device', requestForm.used_device)
            .select()


        if (error) {
            console.error('Error updating identity actions:', error);
            return NextResponse.json({
                error: error,
                status: 500
            })
        }

        return NextResponse.json({
            data,
            status: 200,
            description: 'Current Identity actions updated successfully'
        })
    } catch (error) {
        console.error('An error occurred:', error);
        return NextResponse.json({
            error: error,
            status: 500
        })
    }
}

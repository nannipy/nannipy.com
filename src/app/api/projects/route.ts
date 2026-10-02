import { NextResponse } from 'next/server';
import { getProjects } from '@/lib/github';

export const revalidate = 3600; // 1 hour ISR

export async function GET() {
  try {
    const projects = await getProjects();
    return NextResponse.json(projects);
  } catch (error) {
    console.error('Failed to get projects in API route:', error);
    return NextResponse.json(
      { error: 'Failed to fetch projects' },
      { status: 500 }
    );
  }
}

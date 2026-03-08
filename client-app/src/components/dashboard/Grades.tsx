'use client';
import { useState } from 'react';

export default function Grades() {
  const [selectedTerm, setSelectedTerm] = useState('term1');
  
  const grades = {
    term1: [
      { subject: 'Mathematics', score: 85, grade: 'A', teacher: 'Mr. Smith' },
      { subject: 'English', score: 78, grade: 'B+', teacher: 'Ms. Johnson' },
      { subject: 'Science', score: 92, grade: 'A+', teacher: 'Dr. Brown' },
      { subject: 'History', score: 76, grade: 'B+', teacher: 'Mr. Wilson' },
      { subject: 'Geography', score: 88, grade: 'A', teacher: 'Ms. Davis' }
    ],
    term2: [
      { subject: 'Mathematics', score: 88, grade: 'A', teacher: 'Mr. Smith' },
      { subject: 'English', score: 82, grade: 'A-', teacher: 'Ms. Johnson' },
      { subject: 'Science', score: 90, grade: 'A', teacher: 'Dr. Brown' },
      { subject: 'History', score: 79, grade: 'B+', teacher: 'Mr. Wilson' },
      { subject: 'Geography', score: 85, grade: 'A', teacher: 'Ms. Davis' }
    ],
    term3: [
      { subject: 'Mathematics', score: 0, grade: 'N/A', teacher: 'Mr. Smith' },
      { subject: 'English', score: 0, grade: 'N/A', teacher: 'Ms. Johnson' },
      { subject: 'Science', score: 0, grade: 'N/A', teacher: 'Dr. Brown' },
      { subject: 'History', score: 0, grade: 'N/A', teacher: 'Mr. Wilson' },
      { subject: 'Geography', score: 0, grade: 'N/A', teacher: 'Ms. Davis' }
    ]
  };

  const currentGrades = grades[selectedTerm as keyof typeof grades];
  const validGrades = currentGrades.filter(g => g.score > 0);
  const average = validGrades.length > 0 
    ? Math.round(validGrades.reduce((sum, g) => sum + g.score, 0) / validGrades.length)
    : 0;

  const getGradeColor = (grade: string) => {
    if (grade.startsWith('A')) return 'text-green-600';
    if (grade.startsWith('B')) return 'text-blue-600';
    if (grade.startsWith('C')) return 'text-yellow-600';
    if (grade.startsWith('D')) return 'text-orange-600';
    return 'text-gray-600';
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Academic Performance</h2>
      
      <div className="bg-white rounded-lg shadow p-6 mb-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold text-gray-900">Grade Report</h3>
          <select
            value={selectedTerm}
            onChange={(e) => setSelectedTerm(e.target.value)}
            className="px-3 py-2 border rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
          >
            <option value="term1">Term 1</option>
            <option value="term2">Term 2</option>
            <option value="term3">Term 3</option>
          </select>
        </div>

        {average > 0 && (
          <div className="mb-6 p-4 bg-blue-50 rounded-lg">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">{average}%</div>
              <div className="text-gray-600">Overall Average</div>
            </div>
          </div>
        )}

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3 px-4">Subject</th>
                <th className="text-center py-3 px-4">Score</th>
                <th className="text-center py-3 px-4">Grade</th>
                <th className="text-left py-3 px-4">Teacher</th>
              </tr>
            </thead>
            <tbody>
              {currentGrades.map((grade, index) => (
                <tr key={index} className="border-b hover:bg-gray-50">
                  <td className="py-3 px-4 font-medium">{grade.subject}</td>
                  <td className="py-3 px-4 text-center">
                    {grade.score > 0 ? `${grade.score}%` : 'N/A'}
                  </td>
                  <td className={`py-3 px-4 text-center font-semibold ${getGradeColor(grade.grade)}`}>
                    {grade.grade}
                  </td>
                  <td className="py-3 px-4">{grade.teacher}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Performance Trend</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-center p-4 bg-green-50 rounded-lg">
            <div className="text-2xl font-bold text-green-600">84%</div>
            <div className="text-gray-600">Term 1 Average</div>
          </div>
          <div className="text-center p-4 bg-blue-50 rounded-lg">
            <div className="text-2xl font-bold text-blue-600">85%</div>
            <div className="text-gray-600">Term 2 Average</div>
          </div>
          <div className="text-center p-4 bg-gray-50 rounded-lg">
            <div className="text-2xl font-bold text-gray-600">--</div>
            <div className="text-gray-600">Term 3 Average</div>
          </div>
        </div>
      </div>
    </div>
  );
}
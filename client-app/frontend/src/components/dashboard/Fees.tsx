'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Fees() {
  const router = useRouter();
  const [selectedTerm, setSelectedTerm] = useState('term1');
  
  const feeStructure = {
    term1: { tuition: 150000, meals: 45000, transport: 30000, activities: 15000 },
    term2: { tuition: 150000, meals: 45000, transport: 30000, activities: 15000 },
    term3: { tuition: 150000, meals: 45000, transport: 30000, activities: 15000 }
  };

  const payments = [
    { date: '2024-01-15', amount: 240000, term: 'Term 1', status: 'Paid' },
    { date: '2024-04-10', amount: 240000, term: 'Term 2', status: 'Paid' },
    { date: '2024-08-01', amount: 240000, term: 'Term 3', status: 'Pending' }
  ];

  const currentFees = feeStructure[selectedTerm as keyof typeof feeStructure];
  const total = Object.values(currentFees).reduce((sum, fee) => sum + fee, 0);

  const handlePayNow = () => {
    router.push('/payment');
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Fee Management</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Fee Structure</h3>
          
          <div className="mb-4">
            <select
              value={selectedTerm}
              onChange={(e) => setSelectedTerm(e.target.value)}
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
            >
              <option value="term1">Term 1</option>
              <option value="term2">Term 2</option>
              <option value="term3">Term 3</option>
            </select>
          </div>

          <div className="space-y-3">
            <div className="flex justify-between">
              <span>Tuition Fee</span>
              <span>{currentFees.tuition.toLocaleString()} RWF</span>
            </div>
            <div className="flex justify-between">
              <span>Meals</span>
              <span>{currentFees.meals.toLocaleString()} RWF</span>
            </div>
            <div className="flex justify-between">
              <span>Transport</span>
              <span>{currentFees.transport.toLocaleString()} RWF</span>
            </div>
            <div className="flex justify-between">
              <span>Activities</span>
              <span>{currentFees.activities.toLocaleString()} RWF</span>
            </div>
            <div className="border-t pt-3 flex justify-between font-bold">
              <span>Total</span>
              <span>{total.toLocaleString()} RWF</span>
            </div>
          </div>

          <button 
            onClick={handlePayNow}
            className="w-full mt-4 bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            Pay Now
          </button>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Payment History</h3>
          
          <div className="space-y-3">
            {payments.map((payment, index) => (
              <div key={index} className="flex justify-between items-center p-3 border rounded">
                <div>
                  <div className="font-medium">{payment.term}</div>
                  <div className="text-sm text-gray-600">{payment.date}</div>
                </div>
                <div className="text-right">
                  <div className="font-medium">{payment.amount.toLocaleString()} RWF</div>
                  <div className={`text-sm ${payment.status === 'Paid' ? 'text-green-600' : 'text-red-600'}`}>
                    {payment.status}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
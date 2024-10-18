import React, { useState } from 'react';
import { Search, Plus, X,UserRound} from 'lucide-react';

export default function Member() {
  const [members, setMembers] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [newMember, setNewMember] = useState("");

  const addMember = () => {
    if (newMember.trim()) {
      setMembers([...members, newMember.trim()]);
      setNewMember("");
      setShowModal(false);
    }
  };

  const removeMember = (indexToRemove) => {
    setMembers(members.filter((_, index) => index !== indexToRemove));
  };

  return (
    <section className='py-2'>
      <div className="bg-blue-200 p-4 rounded-3xl shadow-[inset_2px_2px_4px_rgba(0,0,0,0.3)]">
        <div className='flex items-center space-x-4'>
          <p className='font-semibold pr-20'>Members</p>
          <button onClick={() => setShowModal(true)}>
            <Plus />
          </button>
        </div>
        <div className=' overflow-y-auto mt-2 scroll-smooth hide-scrollbar ' 
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        {members.map((member,index) => (
  <div
    key={index}
    className='flex items-center justify-between rounded-full p-1 font-medium
              hover:bg-blue-100 transition-colors duration-500'
  >
     <UserRound className='w-4 h-4' />
    <p>{member}</p>
    <button onClick={() => removeMember(index)}>
      <X className="text-black w-4 h-4" />
    </button>
  </div>
))}
        </div>

      </div>

 {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg">
            <h3 className='font-semibold mb-2'>Add Member</h3>
            <input
              type="text"
              placeholder="Enter Member's name"
              value={newMember}
              onChange={(e) => setNewMember(e.target.value)}
              className="border p-2 rounded-md w-full"
            />
            <div className='flex justify-end mt-4'>
              <button
                className="bg-gray-300 px-4 py-2 rounded-md mr-2"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded-md"
                onClick={addMember}
              >
                Add
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
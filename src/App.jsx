import { useState } from 'react'

function App() {
  const [meetingName, setMeetingName] = useState('')
  
  const handleJoinMeeting = () => {
    // If meeting name is empty, use 'testmeeting' as default
    const meeting = meetingName.trim() ? meetingName : 'testmeeting'
    window.location.href = `https://meet.anantdv.com/${meeting}#config.disableDeepLinking=true`
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white flex flex-col justify-center items-center p-6">
      <div className="w-full max-w-sm mx-auto">
        <div className="text-center w-full flex flex-col items-center justify-center mb-8 ">
          <div className='ml-[20%]'><img src="https://anantdv.com/construction/img1/transparent%20high%20resolution.png" className='w-[80%]' alt="" /></div>
          <h1 className="text-3xl font-bold text-indigo-600">Join Meeting</h1>
          <p className="text-gray-500 mt-2">Enter a meeting name to connect</p>
        </div>
        
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="mb-5">
            <label htmlFor="meetingName" className="block text-sm font-medium text-gray-700 mb-2">
              Meeting Name
            </label>
            <input 
              id="meetingName"
              type="text" 
              value={meetingName} 
              onChange={(e) => setMeetingName(e.target.value)} 
              placeholder="Enter meeting name"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-gray-800"
            />
          </div>
          
          <button 
            className="w-full bg-indigo-600 text-white py-3 px-4 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors font-medium text-lg"
            onClick={handleJoinMeeting}
          >
            Join Now
          </button>
        </div>
      </div>
      
      <div className="w-full max-w-sm mx-auto px-4">
        <div className="border-t border-gray-200 pt-4 text-center">
          <p className="text-sm text-gray-500">
            Meeting App by Anantdv
          </p>
        </div>
      </div>
    </div>
  )
}

export default App
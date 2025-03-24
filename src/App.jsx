import { useState } from 'react'

function App() {
  const [meetingName, setMeetingName] = useState('')
  
  const handleJoinMeeting = () => {
    // If meeting name is empty, use 'testmeeting' as default
    const meeting = meetingName.trim() ? meetingName : 'testmeeting'
    window.location.href = `https://meet.anantdv.com/${meeting}#config.disableDeepLinking=true`
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center p-4 sm:p-6">
      <div className="w-full max-w-md">
        <h1 className="text-3xl font-bold text-center text-indigo-600 mb-8">Join Meeting</h1>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="mb-4">
            <label htmlFor="meetingName" className="block text-sm font-medium text-gray-700 mb-1">
              Meeting Name
            </label>
            <input 
              id="meetingName"
              type="text" 
              value={meetingName} 
              onChange={(e) => setMeetingName(e.target.value)} 
              placeholder="Enter meeting name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          
          <button 
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors font-medium"
            onClick={handleJoinMeeting}
          >
            Join Now
          </button>
        </div>
      </div>
      
      <footer className="mt-auto pt-6 text-sm text-gray-500 text-center">
        Meeting App by Anantdv
      </footer>
    </div>
  )
}

export default App
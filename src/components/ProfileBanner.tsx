import Image from 'next/image';
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaFileDownload,
  FaGithub,
  FaLinkedin,
  FaTwitter,
} from 'react-icons/fa';

export default function ProfileBanner() {
  return (
    <div className="mt-6 px-4 sm:px-0">
      <div className="bg-white rounded-xl shadow p-6 sm:p-8 max-w-6xl mx-auto w-full">
        {/* Flex container switches layout at sm breakpoint */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between space-y-6 sm:space-y-0 sm:space-x-8">
          {/* Left: Profile Image */}
          <div className="flex-shrink-0">
            <div className="rounded-full overflow-hidden w-[120px] h-[120px] shadow mx-auto sm:mx-0">
              <Image
                src="/profile.png"
                alt="Paulo Azedo"
                width={120}
                height={120}
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Middle: Name, Title, Socials */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left space-y-2">
            <h2 className="text-2xl font-semibold text-gray-900">Paulo Azedo</h2>
            <p className="text-gray-600 text-sm">
              Senior Systems Engineer | Solutions Architect
            </p>
            <div className="flex space-x-4 text-gray-500 pt-1">
              <a href="https://github.com/yourhandle" target="_blank" rel="noopener noreferrer">
                <FaGithub className="w-5 h-5 hover:text-gray-800" />
              </a>
              <a href="https://linkedin.com/in/yourhandle" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="w-5 h-5 hover:text-blue-700" />
              </a>
              <a href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="w-5 h-5 hover:text-sky-500" />
              </a>
            </div>
          </div>

          {/* Divider for desktop only */}
          <div className="hidden sm:block w-px bg-gray-300 self-stretch" />

          {/* Right: Contact Info (2x2 grid always) */}
          <div className="grid grid-cols-2 gap-y-4 gap-x-8 text-sm text-gray-800 w-full sm:w-1/2">
            <div>
              <p className="text-xs text-gray-500 mb-1">EMAIL</p>
              <div className="flex items-center space-x-2">
                <FaEnvelope className="text-gray-400" />
                <span>paulo@example.com</span>
              </div>
            </div>

            <div>
              <p className="text-xs text-gray-500 mb-1">CV</p>
              <div className="flex items-center space-x-2">
                <FaFileDownload className="text-gray-400" />
                <a href="/resume.pdf" download className="text-blue-600 hover:underline">
                  Download
                </a>
              </div>
            </div>

            <div>
              <p className="text-xs text-gray-500 mb-1">LOCATION</p>
              <div className="flex items-center space-x-2">
                <FaMapMarkerAlt className="text-gray-400" />
                <span>Chicago, IL</span>
              </div>
            </div>

            <div>
              <p className="text-xs text-gray-500 mb-1">STATUS</p>
              <span className="flex items-center space-x-2">
                <span>✅</span>
                <span>Available</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
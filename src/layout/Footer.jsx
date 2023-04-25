

const Footer = () => {
  return (
    <footer className="bg-[#1A1A1A] mt-[8rem]">
      <div className="w-full max-w-[1600px] mx-auto text-white py-6 px-6">
        <div className="footer-border flex justify-between pt-4 px-6">
          <div className="flex gap-x-6">
            <p>&copy; 2023 Excel, Inc</p>
            <ul className="flex">
              <li className="px-3 list-style-bullet text-sm">Terms</li>
              <li className="px-3 list-style-bullet text-sm">Sitemaps</li>
              <li className="px-3 list-style-bullet text-sm">Privacy</li>
              <li className="px-3 list-style-bullet text-sm">Feedbacks</li>
            </ul>
          </div>
          <div></div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
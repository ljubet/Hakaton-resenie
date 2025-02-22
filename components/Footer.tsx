import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-brand-teal text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">Srekja.mk</h3>
            <p>Connecting startups and entrepreneurs</p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
            <ul>
              <li>
                <Link href="/matchmaker" className="hover:text-brand-yellow">
                  Matchmaker
                </Link>
              </li>
              <li>
                <Link href="/forum" className="hover:text-brand-yellow">
                  Forum
                </Link>
              </li>
              <li>
                <Link href="/news" className="hover:text-brand-yellow">
                  News
                </Link>
              </li>
              <li>
                <Link href="/podcast" className="hover:text-brand-yellow">
                  Podcast
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h4 className="text-lg font-semibold mb-2">Contact Us</h4>
            <p>Email: info@srekja.mk</p>
            <p>Phone: +389 12 345 678</p>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2023 Srekja.mk. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}


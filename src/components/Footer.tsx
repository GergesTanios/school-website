import {
  
  Mail,
  MapPin,
  Phone,
} from 'lucide-react'
import logo from '../assets/lycee-st-elie-logo.png'

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from 'react-icons/fa'

function Footer() {
  return (
   <footer
  id="contact"
  className="bg-school-navy-dark text-slate-300"
>
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
            <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-white p-1">
<button
  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
  className="cursor-pointer bg-transparent border-0 p-0"
  aria-label="Back to top"
>
  <img
    src={logo}
    alt="Lycée Saint Elie"
  />
</button>
</div>

              <div>
                <p className="font-bold text-white">Lycée Saint-Elie</p>
                <p className="text-xs text-amber-400">
                  Learn. Grow. Lead.
                </p>
              </div>
            </div>

            <p className="mt-5 max-w-xs leading-7 text-slate-400">
              Inspiring students to learn, grow, lead, and remain connected to
              their school community for life.
            </p>
          </div>

          <div>
            <h3 className="mb-5 font-bold text-white">School</h3>

            <div className="flex flex-col gap-3 text-sm">
              <a href="#about">About Us</a>
              <a href="#academics">Academics</a>
              <a href="#admissions">Admissions</a>
              <a href="#student-life">Student Life</a>
              <a href="#news">News & Events</a>
            </div>
          </div>

          <div>
            <h3 className="mb-5 font-bold text-white">Alumni</h3>

            <div className="flex flex-col gap-3 text-sm">
              <a href="#alumni">Alumni Network</a>
              <a href="#alumni">Update My Profile</a>
              <a href="#alumni">Alumni Stories</a>
              <a href="#alumni">Reunions</a>
              <a href="#alumni">Mentorship</a>
              <a href="#alumni">Career Opportunities</a>
            </div>
          </div>

          <div>
            <h3 className="mb-5 font-bold text-white">Contact</h3>

            <div className="space-y-4 text-sm">
              <div className="flex gap-3">
                <MapPin size={18} className="shrink-0 text-amber-400" />
                <span>Darbesim, Saida, Lebanon</span>
              </div>

              <div className="flex gap-3">
                <Phone size={18} className="text-amber-400" />
                <span>+961 1 000 000</span>
              </div>

              <div className="flex gap-3">
                <Mail size={18} className="text-amber-400" />
                <span>info@lyceestelie.edu.lb</span>
              </div>
            </div>

           <div className="mt-6 flex gap-4">
  <FaFacebookF size={20} />
  <FaInstagram size={20} />
  <FaLinkedinIn size={20} />
  <FaYoutube size={20} />
</div>
          </div>
        </div>

    <div className="mt-14 border-t border-white/10 pt-7 text-sm text-slate-400">
  © 2026 Lycée Saint-Elie. All Rights Reserved.
</div>
      </div>
    </footer>
  )
}

export default Footer

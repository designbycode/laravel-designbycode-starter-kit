import twoFactor from './two-factor'
import passkeys from './passkeys'
import auth from './auth'
import pages from './pages'
const admin = {
    twoFactor: Object.assign(twoFactor, twoFactor),
passkeys: Object.assign(passkeys, passkeys),
auth: Object.assign(auth, auth),
pages: Object.assign(pages, pages),
}

export default admin
export class Email {
  static validate (email: string): boolean {
    const emailRegex =
      /^[-!#$%&'*+/0-9=?A-Z^_a-z`{|}~](\.?[-!#$%&'*+/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/

    if (!email) {
      return false
    }

    if (!emailRegex.test(email)) {
      return false
    }

    const [local, domain] = email.split('@')
    const localPartTotalOfChars = 64
    const domainTotalOfChars = 255
    const totalCharsEmail = 320

    if (email.length > totalCharsEmail) {
      return false
    }

    if (domain.length > domainTotalOfChars || domain.length === 0) {
      return false
    }

    if (local.length > localPartTotalOfChars || local.length === 0) {
      return false
    }

    const domainParts = domain.split('.')
    const domainPartsTotalOfChars = 63
    const domainPartLargerThanMaxChars = domainParts.some((part) => part.length > domainPartsTotalOfChars)

    if (domainPartLargerThanMaxChars) {
      return false
    }

    return true
  }
}

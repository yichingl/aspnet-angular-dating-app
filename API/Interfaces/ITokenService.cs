using API.Entities;

namespace API.Interfaces
{
    /// <summary>
    /// Responsible solely for creation of JWT token.
    /// </summary>
    public interface ITokenService
    {
        string CreateToken(AppUser user);
    }
}
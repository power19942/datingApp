using DatingApp.Api.Models;
using Microsoft.EntityFrameworkCore;

namespace DatingApp.Api.Data
{
  public class DataContext : DbContext
  {
    public DataContext(DbContextOptions<DataContext> options) : base(options) { }

    public DbSet<Value> Values { get; set; }
    public DbSet<User> Users {get;set;}
    public DbSet<Photo> Photos {get;set;}

    // protected override void OnModelCreating(ModelBuilder modelBuilder){
    //   base.OnModelCreating(modelBuilder);
    //   modelBuilder.Entity<User>().Property(x=>x.Country).
    // }

  }
}
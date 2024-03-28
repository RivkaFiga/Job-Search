namespace JobsAPI.Models
{
    // public class JobField {
    //     public string JobField { get; set; }
    //     //  TEACHING , TAXES, PROGRAMMING, KINDERGARDEN 
    //      }
    public class Job

    {
        public int JobId { get; set; }
        public string JobField { get; set; }
        public string JobName { get; set; }
        public string Area { get; set; }
        public string Requirements { get; set; }
        public bool Hybrid { get; set; }
        public int ScopeOfHours { get; set; }
    }
}
